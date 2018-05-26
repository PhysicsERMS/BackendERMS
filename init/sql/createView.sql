-- 实验列表视图
CREATE OR REPLACE VIEW experiment (id, name, classRoom, teacherId, teacherName, createTime, modifiedTime
) AS
SELECT e.id, e.name, e.room, e.teacher_id, t.name, e.create_time, e.modified_time
FROM erms_experiment e, erms_teacher t 
WHERE e.teacher_id = t.id;

-- 学生列表视图
CREATE OR REPLACE VIEW student (id, num, name, college, class, phone, email, createTime, modifiedTime) AS
SELECT s.id, s.number, s.name, s.college, s.class, s.phone, s.email, s.create_time, s.modified_time
FROM erms_student s;

-- 教师列表视图
CREATE OR REPLACE VIEW teacher (id, nick, name, office, phone, email, createTime, modifiedTime) AS
SELECT t.id, t.nick, t.name, t.office, t.phone, t.email, t.create_time, t.modified_time 
FROM erms_teacher t;

-- 管理员列表视图
CREATE OR REPLACE VIEW admin (id, name, phone, email, createTime, modifiedTime) AS
SELECT a.id, a.name, a.phone, a.email, a.create_time, a.modified_time
FROM erms_admin a;

-- 通知列表视图
CREATE OR REPLACE VIEW notice (id, title, content, createTime, modifiedTime, teacherId, teacherName) AS
SELECT n.id, n.title, n.content, n.create_time, n.modified_time, t.id, t.name 
FROM erms_notice n, erms_teacher t 
WHERE n.teacher_id = t.id;

-- 学生预约实验视图
CREATE OR REPLACE VIEW subExper (id, studentId, studentName, experimenId, classTime, preStatus,
status, preScore, score, operateScore, downloadUrl, viewUrl, createTime,
modifiedTime, experimentName, classRoom, teacherId) AS
SELECT su.id, su.student_id, s.name, su.experiment_id, su.class_time, su.pre_status,
su.status, su.pre_score, su.score, su.operate_score, su.download_url, 
su.view_url, su.create_time, su.modified_time, e.name, e.room,
e.teacher_id
FROM erms_subscribe su, erms_experiment e, erms_student s 
WHERE su.experiment_id = e.id AND su.student_id = s.id;

/* CREATE OR REPLACE VIEW com_subExper (id, studentId, studentName, experimenId, classTime, preStatus,
status, preScore, score, operateScore, downloadUrl, viewUrl, createTime,
modifiedTime, experimentName, classRoom, teacherId) AS
SELECT su.id, su.studentId, su.studentName, su.experimenId, su.classTime, su.preStatus,
su.status, su.preScore, su.score, su.operateScore, su.downloadUrl, su.viewUrl, su.createTime,
su.modifiedTime, su.experimentName, su.classRoom, su.teacherId
FROM subExper su, 
WHERE  */

-- 根据实验id查询学生视图
CREATE OR REPLACE VIEW student_sub (id, num, name, college, class, phone,
email, experimentId, classTime, preStatus, status,
preScore, score, operateScore, downloadUrl, viewUrl, createTime,
modifiedTime) AS
SELECT su.id, s.number, s.name, s.college, s.class, s.phone, s.email,
su.experiment_id, su.class_time, su.pre_status, su.status,
su.pre_score, su.score, su.operate_score, su.download_url, 
su.view_url, su.create_time, su.modified_time
FROM erms_student s, erms_subscribe su
WHERE su.student_id = s.id;