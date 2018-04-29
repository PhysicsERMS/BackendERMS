/* 
 * @Author: Maiduo
 * @Date: 2018-04-26 16:30:57
 * @Function: 初始化所有数据表
*/

/* ---------------创建admin表---------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT "",
  `password` varchar(255) DEFAULT "",
  `phone` varchar(255) DEFAULT "",
  `email` varchar(255) DEFAULT "",
  `create_time` varchar(20) DEFAULT "",
  `modified_time` varchar(20) DEFAULT "",
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `erms_admin` set name='admin', email='admin@admin.me', password='admin', phone='18560684220', create_time=now();


/*  ---------------------创建学生表--------------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `password` varchar(255) DEFAULT "",
  `name` varchar(255) DEFAULT "",
  `college` varchar(255) DEFAULT "",
  `class` varchar(255) DEFAULT "",
  `phone` varchar(255) DEFAULT "",
  `email` varchar(255) DEFAULT "",
  `create_time` varchar(20) DEFAULT "",
  `modified_time` varchar(20) DEFAULT "",
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



/* ---------------------------创建教师表--------------------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT "",
  `nick` varchar(255) DEFAULT "",
  `phone` varchar(255) DEFAULT "",
  `email` varchar(255) DEFAULT "",
  `office` varchar(255) DEFAULT "",
  `create_time` varchar(20) DEFAULT "",
  `modified_time` varchar(20) DEFAULT "",
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ----------------------------创建实验表--------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_experiment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT "",
  `teacher_id` int(11) NOT NULL,
  `room` varchar(255) DEFAULT "",
  `create_time` varchar(20) DEFAULT "",
  `modified_time` varchar(20) DEFAULT "",
  PRIMARY KEY (`id`),
  FOREIGN KEY (`teacher_id`) REFERENCES `erms_teacher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/* ---------------------------创建通知表--------------------------------- */
CREATE TABLE IF NOT EXISTS `erms_notice`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` VARCHAR(255) DEFAULT "",
`content` LONGTEXT DEFAULT "",
`teacher_id` int(11) NOT NULL,
`create_time` VARCHAR(255) DEFAULT "",
`modified_time` VARCHAR(255) DEFAULT "",
PRIMARY KEY(`id`),
FOREIGN KEY (`teacher_id`) REFERENCES `erms_teacher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ------------------------创建预约实验表------------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_subscribe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `experiment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `class_time` varchar(255) DEFAULT "",
  `pre_status` varchar(255) DEFAULT "",
  `status` varchar(255) DEFAULT "",
  `download_url` varchar(255) DEFAULT "",
  `view_url` varchar(255) DEFAULT "",
  `create_time` varchar(20) DEFAULT "",
  `modified_time` varchar(20) DEFAULT "",
  PRIMARY KEY (`id`),
  FOREIGN KEY (`experiment_id`) REFERENCES `erms_experiment` (`id`),
  FOREIGN KEY (`student_id`) REFERENCES `erms_student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;