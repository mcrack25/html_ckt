<?php

$configs = [
    'to' => 'mcrack@yandex.ru',
    'site_name' => 'murad-ahmedov.ru'
];

$messages = [
    'missing_required_fields' => 'Вы не заполнили все необходимые поля',
    'honeypot' => 'Ошибка отправки, не верно заполнены поля',
    'success' => 'Данные успешно отправлены'
];

$default_message = [
    'type' => 'error',
    'message' => 'Ошибка!!! Неверная форма отправки'
];

function consultation($post, $configs, $messages){
    if (!empty($post['honeypot'])) {
        $message = [
            'type' => 'error',
            'message' => $messages['honeypot']
        ];
        return $message;
    }
    if ((!empty($post['name'])) and (!empty($post['tel'])) and (!empty($post['message']))) {

        $name = trim(strip_tags($post['name']));
        $tel = trim(strip_tags($post['tel']));
        $from = trim(strip_tags($post['from']));
        $message = trim(strip_tags($post['message']));

        mail($configs['to'],
            'Письмо c сайта: ' . $configs['site_name'],
            'Вам написал: ' . $name . '<br />' .
            'Его номер: ' . $tel . '<br />' .
            'Его сообщение: ' . $message . '<br />' .
            'Письмо отправленно с: ' . $from,
            "Content-type:text/html;charset=UTF-8"
        );
        $message = [
            'type' => 'success',
            'message' => $messages['success']
        ];
        return $message;
    } else {
        $message = [
            'type' => 'error',
            'message' => $messages['missing_required_fields']
        ];
        return $message;
    }
}

function sale_15($post, $configs, $messages){
    if (!empty($post['honeypot'])) {
        $message = [
            'type' => 'error',
            'message' => $messages['honeypot']
        ];
        return $message;
    }
    if ((!empty($post['name'])) and (!empty($post['tel'])) and (!empty($post['email']))) {

        $name = trim(strip_tags($post['name']));
        $tel = trim(strip_tags($post['tel']));
        $from = trim(strip_tags($post['from']));
        $email = trim(strip_tags($post['email']));

        mail($configs['to'],
            'Письмо c сайта: ' . $configs['site_name'],
            'Вам написал: ' . $name . '<br />' .
            'Его номер: ' . $tel . '<br />' .
            'Его email: ' . $email . '<br />' .
            'Письмо отправленно с: ' . $from,
            "Content-type:text/html;charset=UTF-8"
        );
        $message = [
            'type' => 'success',
            'message' => $messages['success']
        ];
        return $message;
    } else {
        $message = [
            'type' => 'error',
            'message' => $messages['missing_required_fields']
        ];
        return $message;
    }
}

function get_recept($post, $configs, $messages){
    if (!empty($post['honeypot'])) {
        $message = [
            'type' => 'error',
            'message' => $messages['honeypot']
        ];
        return $message;
    }
    if ((!empty($post['name'])) and (!empty($post['tel'])) and (!empty($post['email']))) {

        $name = trim(strip_tags($post['name']));
        $tel = trim(strip_tags($post['tel']));
        $from = trim(strip_tags($post['from']));
        $email = trim(strip_tags($post['email']));

        mail($configs['to'],
            'Письмо c сайта: ' . $configs['site_name'],
            'Вам написал: ' . $name . '<br />' .
            'Его номер: ' . $tel . '<br />' .
            'Его email: ' . $email . '<br />' .
            'Письмо отправленно с: ' . $from,
            "Content-type:text/html;charset=UTF-8"
        );
        $message = [
            'type' => 'success',
            'message' => $messages['success']
        ];
        return $message;
    } else {
        $message = [
            'type' => 'error',
            'message' => $messages['missing_required_fields']
        ];
        return $message;
    }
}

function have_questions($post, $configs, $messages){
    if (!empty($post['honeypot'])) {
        $message = [
            'type' => 'error',
            'message' => $messages['honeypot']
        ];
        return $message;
    }
    if ((!empty($post['name'])) and (!empty($post['tel'])) and (!empty($post['email'])) and (!empty($post['message']))) {

        $name = trim(strip_tags($post['name']));
        $tel = trim(strip_tags($post['tel']));
        $email = trim(strip_tags($post['email']));
        $from = trim(strip_tags($post['from']));
        $message = trim(strip_tags($post['message']));

        mail($configs['to'],
            'Письмо c сайта: ' . $configs['site_name'],
            'Вам написал: ' . $name . '<br />' .
            'Его номер: ' . $tel . '<br />' .
            'Его email: ' . $email . '<br />' .
            'Его сообщение: ' . $message . '<br />' .
            'Письмо отправленно с: ' . $from,
            "Content-type:text/html;charset=UTF-8"
        );
        $message = [
            'type' => 'success',
            'message' => $messages['success']
        ];
        return $message;
    } else {
        $message = [
            'type' => 'error',
            'message' => $messages['missing_required_fields']
        ];
        return $message;
    }
}

if (!empty($_POST['form'])) {
    switch ($_POST['form']) {
        case 'consultation':
            $message = consultation($_POST, $configs, $messages);
            break;
        case 'sale_15':
            $message = sale_15($_POST, $configs, $messages);
            break;
        case 'get_recept':
            $message = get_recept($_POST, $configs, $messages);
            break;
        case 'have_questions':
            $message = have_questions($_POST, $configs, $messages);
            break;
        default:
            $message = $default_message;
    }
}


die(json_encode($message));