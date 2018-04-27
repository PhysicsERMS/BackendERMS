/*
 * @Author: Maiduo
 * @Date: 2018-04-26 15:40:10
*/
CREATE TABLE   IF NOT EXISTS  `edps_experiment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`teacher_id`) REFERENCES `edps_teacher` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;