/*
 * @Author: Maiduo
 * @Date: 2018-04-26 16:00:59
*/
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
  CONSTRAINT fk_3 FOREIGN KEY (`experiment_id`) REFERENCES `erms_experiment` (`id`),
  CONSTRAINT fk_4 FOREIGN KEY (`student_id`) REFERENCES `edps_student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;