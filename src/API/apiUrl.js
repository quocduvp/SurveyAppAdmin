//Api url
//login
export const post_admin_login = 'http://localhost:62545/api/v1/login'
export const get_admin_profile = 'http://localhost:62545/api/v1/admin/profile'
export const reset_password_account = 'http://localhost:62545/api/v1/admin/reset_password'
export const reset_password_admin = "http://localhost:62545/api/v1/admin/password_admin"
//account
export const get_list_account = 'http://localhost:62545/api/v1/admin/accounts'
export const get_list_account_deny = 'http://localhost:62545/api/v1/admin/accounts_verify'
export const get_list_account_staff = 'http://localhost:62545/api/v1/admin/staff_accounts'
export const get_list_account_student = 'http://localhost:62545/api/v1/admin/student_accounts'
export const get_list_report_account = 'http://localhost:62545/api/v1/admin/list_report'
export const delete_account = 'http://localhost:62545/api/v1/admin/accounts'
export const get_details_account = 'http://localhost:62545/api/v1/admin/accounts'
export const change_status_account = 'http://localhost:62545/api/v1/admin/accounts/status'
//surveys
export const get_list_survey_publish = 'http://localhost:62545/api/v1/admin/surveys'
export const get_list_survey_unpublish = 'http://localhost:62545/api/v1/admin/surveys_unpublish'
export const get_list_survey_text = 'http://localhost:62545/api/v1/admin/surveys_text'
export const get_list_survey_choice = 'http://localhost:62545/api/v1/admin/surveys_choice'
export const get_list_survey_deleted = 'http://localhost:62545/api/v1/admin/surveys_deleted'
export const get_survey_type = "http://localhost:62545/api/v1/admin/survey_type"
export const get_publish_survey = 'http://localhost:62545/api/v1/admin/surveys_publish'
export const delete_survey = 'http://localhost:62545/api/v1/admin/surveys'
export const update_survey = 'http://localhost:62545/api/v1/admin/surveys'
export const get_details_survey = 'http://localhost:62545/api/v1/admin/surveys'
export const get_restore_survey = 'http://localhost:62545/api/v1/admin/surveys_restore'
export const create_new_survey = "http://localhost:62545/api/v1/admin/surveys"
//question
export const update_question = "http://localhost:62545/api/v1/admin/questions"
export const delete_question = "http://localhost:62545/api/v1/admin/questions"
export const create_question = "http://localhost:62545/api/v1/admin/questions"
export const upload_thumb = "http://localhost:62545/api/v1/upload_thumb"
// answer
export const create_answer_text = "http://localhost:62545/api/v1/admin/question"
export const create_answer_choice = "http://localhost:62545/api/v1/admin/question"
export const update_answer_choice = "http://localhost:62545/api/v1/admin/question"
export const delete_answer_choice = "http://localhost:62545/api/v1/admin/question"
//Faculty/Classroom
export const create_faculty = "http://localhost:62545/api/v1/admin/faculty"
export const update_faculty = "http://localhost:62545/api/v1/admin/faculty"
export const delete_faculty = "http://localhost:62545/api/v1/admin/faculty"
export const get_List_faculty = "http://localhost:62545/api/v1/all/faculty"
export const create_classroom = "http://localhost:62545/api/v1/admin/classroom"
export const update_classroom = "http://localhost:62545/api/v1/admin/classroom"
export const delete_classroom = "http://localhost:62545/api/v1/admin/classroom"
export const get_List_classroom = "http://localhost:62545/api/v1/all/classroom"
//Feedback
export const list_feeback_checked = "http://localhost:62545/api/v1/admin/feedback_checked"
export const list_feeback_unchecked = "http://localhost:62545/api/v1/admin/feedback_unchecked"
export const update_check_feedback = "http://localhost:62545/api/v1/admin/feedback"
export const remove_feedback = "http://localhost:62545/api/v1/admin/feedback"
//FAQs
export const remove_faqs = "http://localhost:62545/api/v1/admin/faqs"
export const create_faqs = "http://localhost:62545/api/v1/admin/faqs"
export const update_faqs = "http://localhost:62545/api/v1/admin/faqs"
export const list_faqs = "http://localhost:62545/api/v1/all/faqs"
// dashboard
export const statistics_system = "http://localhost:62545/api/v1/admin/dashboard"
export const statistics_survey_details = "http://localhost:62545/api/v1/admin/dashboard/surveys"