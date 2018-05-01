-- 实验列表视图
CREATE VIEW experiment (id, name, classRoom, teacherName, createTime, modifiedTime
) AS
SELECT e.id, e.name, e.room, t.name, e.create_time, e.modified_time
FROM erms_experiment e, erms_teacher t 
WHERE e.teacher_id = t.id;

-- 学生列表视图
CREATE VIEW student (id, num, name, college, class, phone, email, createTime, modifiedTime) AS
SELECT s.id, s.number, s.name, s.college, s.class, s.phone, s.email, s.create_time, s.modified_time
FROM erms_student s;

-- 教师列表视图
CREATE VIEW teacher (id, nick, name, office, phone, email, createTime, modifiedTime) AS
SELECT t.id, t.nick, t.name, t.office, t.phone, t.email, t.create_time, t.modified_time 
FROM erms_teacher t;

-- 通知列表视图
CREATE VIEW notice (id, title, content, createTime, modifiedTime, teacherName) AS
SELECT n.id, n.title, n.content, n.create_time, n.modified_time, t.name 
FROM erms_notice n, erms_teacher t 
WHERE n.teacher_id = t.id;

