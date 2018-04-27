/* 
 * @Author: Maiduo
 * @Date: 2018-04-26 16:30:57
 * @Function: 初始化所有数据表
*/

/* ---------------创建admin表---------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `erms_admin` set name='admin', email='admin@admin.me', password='admin', phone='18560684220';


/*  ---------------------创建学生表--------------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `college` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



/* ---------------------------创建教师表--------------------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `office` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ----------------------------创建实验表----------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_experiment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`teacher_id`) REFERENCES `erms_teacher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


/* ---------------------------创建通知表--------------------------------- */
CREATE TABLE IF NOT EXISTS `erms_notice`(
`id` int(11) NOT NULL AUTO_INCREMENT,
`title` VARCHAR(255) DEFAULT NULL,
`content` LONGTEXT DEFAULT NULL,
`teacher_id` int(11) DEFAULT NULL,
`create_time` VARCHAR(255) DEFAULT NULL,
`modified_time` VARCHAR(255) DEFAULT NULL,
PRIMARY KEY(`id`),
FOREIGN KEY (`teacher_id`) REFERENCES `erms_teacher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ------------------------创建预约实验表------------------------------- */
CREATE TABLE   IF NOT EXISTS  `erms_subscribe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `experiment_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `class_time` varchar(255) DEFAULT NULL,
  `pre_status` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `download_url` varchar(255) DEFAULT NULL,
  `view_url` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`experiment_id`) REFERENCES `erms_experiment` (`id`),
  FOREIGN KEY (`student_id`) REFERENCES `erms_student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;