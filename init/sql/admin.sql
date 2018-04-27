/*
 * @Author: Maiduo
 * @Date: 2018-04-26 15:40:29
*/
CREATE TABLE   IF NOT EXISTS  `edps_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `edps_admin` set name='admin', email='admin@admin.me', password='admin', phone='18560684220';