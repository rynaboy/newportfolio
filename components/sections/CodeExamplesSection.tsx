"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Copy, ExternalLink } from "lucide-react"

export function CodeExamplesSection() {
  const codeExamples = [
    {
      title: "Laravel API Controller",
      description: "RESTful API controller with validation and error handling",
      language: "PHP",
      framework: "Laravel",
      code: `<?php

namespace App\\Http\\Controllers\\Api;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Product;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;
use Illuminate\\Validation\\ValidationException;

class ProductController extends Controller
{
    /**
     * Display a listing of products
     */
    public function index(): JsonResponse
    {
        $products = Product::with('category')
            ->paginate(15);
            
        return response()->json([
            'success' => true,
            'data' => $products,
            'message' => 'Products retrieved successfully'
        ]);
    }

    /**
     * Store a newly created product
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',
                'category_id' => 'required|exists:categories,id',
                'description' => 'nullable|string',
                'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
            ]);

            $product = Product::create($validated);

            return response()->json([
                'success' => true,
                'data' => $product,
                'message' => 'Product created successfully'
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        }
    }
}`,
    },
    {
      title: "CodeIgniter CRUD Model",
      description: "Complete CRUD operations with CodeIgniter framework",
      language: "PHP",
      framework: "CodeIgniter",
      code: `<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    /**
     * Get all users with pagination
     */
    public function get_users($limit = 10, $offset = 0)
    {
        $this->db->select('users.*, roles.name as role_name');
        $this->db->from('users');
        $this->db->join('roles', 'roles.id = users.role_id', 'left');
        $this->db->where('users.deleted_at', NULL);
        $this->db->limit($limit, $offset);
        $this->db->order_by('users.created_at', 'DESC');
        
        $query = $this->db->get();
        return $query->result_array();
    }

    /**
     * Create new user
     */
    public function create_user($data)
    {
        // Hash password
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        $data['created_at'] = date('Y-m-d H:i:s');
        
        $this->db->insert('users', $data);
        return $this->db->insert_id();
    }

    /**
     * Update user
     */
    public function update_user($id, $data)
    {
        $data['updated_at'] = date('Y-m-d H:i:s');
        
        $this->db->where('id', $id);
        return $this->db->update('users', $data);
    }

    /**
     * Soft delete user
     */
    public function delete_user($id)
    {
        $data = array(
            'deleted_at' => date('Y-m-d H:i:s')
        );
        
        $this->db->where('id', $id);
        return $this->db->update('users', $data);
    }
}`,
    },
    {
      title: "PHP Database Connection Class",
      description: "Secure database connection with prepared statements",
      language: "PHP",
      framework: "Pure PHP",
      code: `<?php

class Database {
    private $host = 'localhost';
    private $db_name = 'your_database';
    private $username = 'your_username';
    private $password = 'your_password';
    private $conn;

    /**
     * Database connection
     */
    public function connect() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                'mysql:host=' . $this->host . ';dbname=' . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch(PDOException $e) {
            echo 'Connection Error: ' . $e->getMessage();
        }

        return $this->conn;
    }

    /**
     * Execute prepared statement
     */
    public function query($sql, $params = []) {
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch(PDOException $e) {
            throw new Exception('Query Error: ' . $e->getMessage());
        }
    }

    /**
     * Get single record
     */
    public function single($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetch();
    }

    /**
     * Get multiple records
     */
    public function resultSet($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetchAll();
    }

    /**
     * Get row count
     */
    public function rowCount($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->rowCount();
    }
}`,
    },
  ]

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <section id="code-examples" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Code Examples
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="text-slate-900 dark:text-white">PHP</span>{" "}
              <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real-world PHP code examples showcasing Laravel, CodeIgniter, and pure PHP development
            </p>
          </div>

          {/* Code Examples Grid */}
          <div className="space-y-12">
            {codeExamples.map((example, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur-sm"
              >
                <CardHeader className="border-b border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {example.title}
                      </CardTitle>
                      <CardDescription className="text-lg">{example.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {example.language}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                      >
                        {example.framework}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(example.code)}
                        className="gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        Copy
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative">
                    <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-6 overflow-x-auto text-sm leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                    <div className="absolute top-4 right-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional PHP Skills */}
          <div className="mt-20">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-950/20 dark:to-purple-950/20">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">PHP Development Expertise</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Comprehensive backend development skills with modern PHP frameworks and best practices
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      title: "Laravel",
                      skills: ["Eloquent ORM", "Artisan CLI", "Blade Templates", "Middleware", "Queue Jobs"],
                    },
                    {
                      title: "CodeIgniter",
                      skills: ["MVC Pattern", "Active Record", "Form Validation", "Session Management", "Hooks"],
                    },
                    {
                      title: "Database",
                      skills: ["MySQL", "PostgreSQL", "Query Optimization", "Database Design", "Migrations"],
                    },
                    {
                      title: "API Development",
                      skills: ["REST APIs", "JWT Auth", "API Documentation", "Rate Limiting", "CORS"],
                    },
                  ].map((category, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{category.title}</h4>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="text-sm text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-white/10 rounded-full px-3 py-1"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View More PHP Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
