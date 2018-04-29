-- 实验列表视图
CREATE VIEW experiment (id, name, classRoom, teacherName) AS
SELECT e.id, e.name, e.room, t.name 
FROM erms_experiment e, erms_teacher t 
WHERE e.teacher_id = t.id;

-- 教师列表视图
CREATE VIEW teacher (id, name, nick, phone, email, office, createTime) AS
SELECT t.id, t.name, t.nick, t.phone, t.email, t.office, t.create_time
FROM erms_teacher t;


-- 通知列表视图
CREATE VIEW notice (id, title, content, createTime, teacherName) AS
SELECT n.id, n.title, n.content, n.create_time, t.name 
FROM erms_notice n, erms_teacher t 
WHERE n.teacher_id = t.id;

