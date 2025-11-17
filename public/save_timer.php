<?php
// Скрипт для сохранения даты таймера в timer.json
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Обработка preflight запроса
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Получаем дату из запроса
$input = json_decode(file_get_contents('php://input'), true);
$date = $input['date'] ?? $_POST['date'] ?? $_GET['date'] ?? null;

// Проверка наличия даты
if (!$date) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Дата не указана'
    ]);
    exit;
}

// Валидация формата даты (YYYY-MM-DD)
if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Неверный формат даты. Используйте YYYY-MM-DD'
    ]);
    exit;
}

// Проверка валидности даты
$dateTime = DateTime::createFromFormat('Y-m-d', $date);
if (!$dateTime || $dateTime->format('Y-m-d') !== $date) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Некорректная дата'
    ]);
    exit;
}

// Формируем полную дату с временем 00:00:00
$targetDate = $date . 'T00:00:00';

// Путь к файлу timer.json (в корне сайта)
$jsonFile = __DIR__ . '/timer.json';

// Проверка прав на запись в директорию
$dir = dirname($jsonFile);
if (!is_writable($dir) && !is_writable($jsonFile)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Нет прав на запись в директорию'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Данные для сохранения
$data = [
    'targetDate' => $targetDate
];

// Сохранение в файл
try {
    $jsonContent = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
    if ($jsonContent === false) {
        throw new Exception('Ошибка кодирования JSON: ' . json_last_error_msg());
    }

    $result = file_put_contents(
        $jsonFile,
        $jsonContent,
        LOCK_EX
    );

    if ($result === false) {
        throw new Exception('Ошибка записи файла. Проверьте права доступа.');
    }

    // Успешный ответ
    echo json_encode([
        'success' => true,
        'message' => 'Дата успешно сохранена',
        'targetDate' => $targetDate
    ], JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка при сохранении: ' . $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
?>

