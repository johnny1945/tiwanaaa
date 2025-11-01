<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['content'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Content is required']);
    exit;
}

$content = $data['content'];
$filename = 'contact-submissions.txt';
$directory = __DIR__ . '/../submissions/';

// Create submissions directory if it doesn't exist
if (!file_exists($directory)) {
    mkdir($directory, 0755, true);
}

$filepath = $directory . $filename;

// Append content to file
$result = file_put_contents($filepath, $content . "\n\n", FILE_APPEND | LOCK_EX);

if ($result === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save submission']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Submission saved successfully']);
?>
