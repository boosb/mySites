<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'timberHouses-wp' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '65a17579210' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'L@ 5tx+<x(3:fa!/`.rX*bD}z;2jvNRe[P4[lD_?)t3cbqM*cS dfkh7IF6%u-a8' );
define( 'SECURE_AUTH_KEY',  'y JW=mAl=5@3m2,Ym6m+ri[Sq}WcR6}G|)b;`$nsbR_w(T[&0gvmVOu<,$mx|*RN' );
define( 'LOGGED_IN_KEY',    '4;^MY&1MbPRj~ %_tlsb4|AhDXcmBw/_Go?DjHUy|Y;[4D^m-hfdje2 EFA1}C]4' );
define( 'NONCE_KEY',        '3$8L:Dfok/TC4v#1!F*/+-KKvfIZ9y-0;ODFP93ubho}Sz~}Uq,kzFO2DK^7;*=m' );
define( 'AUTH_SALT',        '12lGvkX;ML?SlO|sT#_1W+s9pHsi,ZBD2#a;90~mXeY@Y5n4jhB4r=|-~4Ss*<>j' );
define( 'SECURE_AUTH_SALT', 'DTlD@DQOdo2)fg4iu(-n,%0Y9/8q(hfOXkOb8Q& hmAE[45x,.J5*D0@pEkcE_W:' );
define( 'LOGGED_IN_SALT',   '`=zLKyO<~/D%FB?CP398]aWuQi3H<wR!GVz[Py5yICSLZOR;aO;A`(ocbhX/WME1' );
define( 'NONCE_SALT',       'IroqUd&`,ZKzx4)^PKf o]5ir[=$4R$)|`Ng%1-z;TKp@o!0;v~I9Dh`[>>#QC9<' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );

/** Меняю лимит PHP памяти. */

define('WP_MEMORY_LIMIT', '96M');

define( 'WP_HOME', 'http://timberhousessite' );
define( 'WP_SITEURL', 'http://timberhousessite' );

