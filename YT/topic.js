/*
Topics:

1.Register
----------
1.1 Register(save data to database)
1.2 Verify email
postman token
get token
verify token
get _id from token
make isVerifiedEmail true


2.Login
-------
email and password
check if that email exists
(if email not found throw error)
check if that email is verified (if not throw error)
check if password matched =>(if not throw error)
generate token
send token to postman


3.my-profile
------------
3.1
pass token from postman
get token from postman
validate token (if token is not valid throw error)
get _id from token
pass_id to another middleware
next()

3.2
find the details using id

4.update profile
-----------------
pass token from postman
pass that token through isAuthenicated
get _id
get data from body
delete email and password
update profile
send response


5.update password
update password
pass token
isAuthenicated
_id
get body from postman
oldPassword and newPasswd

check either oldPassword match with database password
if yes hash newPassword
save to database
send response

6.forget and reset password
---------------------------
Forget Password
----------------
pass email from postman
get email
check if that email exist in our db(if not throw error with status code 404)
send email with lin (frontend link with token)
send responses

Reset password
--------------
pass token from postman
pass password from postman
pass through isAuthenicated
get _id
hash password
update that _id
send response


7.Delete User
8.Read all user
9.Read specific user


10.Authorization
----------------
admin->read user
superadmin->read user, delete user
customer-> doesnot  have permission to read user
 

isAuthenticated =>middleware
postman pass token
isAuthenticated
_id
read details of that _id
get roe of that details


if the role is either admin or superadmin do next
else throw error with status code 403


STATUS CODE
-----------

success -> 2xx
create = 201
read =200
update=201
delete=200

ERROR
--------
error->4xx
400
401=token not valid, credential not match
403=token is valid but not authorized
409=conflict(duplicate)
404=>api not found



 */