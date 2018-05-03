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

-- 学生预约实验视图name, classRoom, teacherName, 
CREATE VIEW subExper (id, studentId, experimenId, classTime, preStatus, status, preScore, score,
operateScore, downloadUrl, viewUrl, createTime, modifiedTime,
 experimentName, classRoom) AS
SELECT su.id, su.student_id, su.experiment_id, su.class_time, su.pre_status,
su.status, su.pre_score, su.score, su.operate_score, su.download_url, 
su.view_url, su.create_time, su.modified_time, e.name, e.room
FROM erms_subscribe su, erms_student s, erms_experiment e
WHERE su.experiment_id = e.id && su.student_id = s.id;