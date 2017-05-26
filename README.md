# didactic-chainsaw
try to play around with robotjs

gitlab centos note:

1.yum install libsemanage-static libsemanage-devel
https://stackoverflow.com/questions/42547258/gitlab-omnibus-installation-problems-centos-7-selinux

2.official install instruction
https://about.gitlab.com/downloads/#centos7

3.after login / reset password
/profile/account shows your private token, which allows anyone access API without authentication.

4.
list user:
GET 192.168.72.130/api/v4/users?private_token=hxmBD3xTqiZwDqsqd7gC
create user:
POST 192.168.72.130/api/v4/users?private_token=hxmBD3xTqiZwDqsqd7gC&email=123@44.cc&username=123&name=123&password=12345678
create project:
POST 192.168.72.130/api/v4/projects/user/2?name=project1&private_token=hxmBD3xTqiZwDqsqd7gC
add project member:
POST 192.168.72.130/api/v4/projects/1/members?private_token=hxmBD3xTqiZwDqsqd7gC&user_id=1&access_level=30

5.
