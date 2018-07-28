//login
export const post_admin_login = 'https://survey-service-api.azurewebsites.net/api/v1/login'
export const get_admin_profile = 'https://survey-service-api.azurewebsites.net/api/v1/admin/profile'
export const reset_password_account = 'https://survey-service-api.azurewebsites.net/api/v1/admin/reset_password'
export const reset_password_admin = "https://survey-service-api.azurewebsites.net/api/v1/admin/password_admin"
//account
export const get_list_account = 'https://survey-service-api.azurewebsites.net/api/v1/admin/accounts'
export const get_list_account_deny = 'https://survey-service-api.azurewebsites.net/api/v1/admin/accounts_verify'
export const get_list_account_staff = 'https://survey-service-api.azurewebsites.net/api/v1/admin/staff_accounts'
export const get_list_account_student = 'https://survey-service-api.azurewebsites.net/api/v1/admin/student_accounts'
export const delete_account = 'https://survey-service-api.azurewebsites.net/api/v1/admin/accounts'
export const get_details_account = 'https://survey-service-api.azurewebsites.net/api/v1/admin/accounts'
export const change_status_account = 'https://survey-service-api.azurewebsites.net/api/v1/admin/accounts/status'
//surveys
export const get_list_survey_publish = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys'
export const get_list_survey_unpublish = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys_unpublish'
export const get_list_survey_text = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys_text'
export const get_list_survey_choice = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys_choice'
export const get_list_survey_deleted = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys_deleted'
export const get_publish_survey = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys_publish'
export const delete_survey = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys'
export const update_survey = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys'
export const get_details_survey = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys'
export const get_restore_survey = 'https://survey-service-api.azurewebsites.net/api/v1/admin/surveys_restore'
export const create_new_survey = "https://survey-service-api.azurewebsites.net/api/v1/admin/surveys"
//question
export const update_question = "https://survey-service-api.azurewebsites.net/api/v1/admin/questions"
export const delete_question = "https://survey-service-api.azurewebsites.net/api/v1/admin/questions"
export const create_question = "https://survey-service-api.azurewebsites.net/api/v1/admin/questions"
export const upload_thumb = "https://survey-service-api.azurewebsites.net/api/v1/upload_thumb"
// answer
export const create_answer_text = "https://survey-service-api.azurewebsites.net/api/v1/admin/question"
export const create_answer_choice = "https://survey-service-api.azurewebsites.net/api/v1/admin/question"
export const update_answer_choice = "https://survey-service-api.azurewebsites.net/api/v1/admin/question"
export const delete_answer_choice = "https://survey-service-api.azurewebsites.net/api/v1/admin/question"
//Faculty/Classroom
export const create_faculty = "https://survey-service-api.azurewebsites.net/api/v1/admin/faculty"
export const update_faculty = "https://survey-service-api.azurewebsites.net/api/v1/admin/faculty"
export const delete_faculty = "https://survey-service-api.azurewebsites.net/api/v1/admin/faculty"
export const get_List_faculty = "https://survey-service-api.azurewebsites.net/api/v1/all/faculty"
export const create_classroom = "https://survey-service-api.azurewebsites.net/api/v1/admin/classroom"
export const update_classroom = "https://survey-service-api.azurewebsites.net/api/v1/admin/classroom"
export const delete_classroom = "https://survey-service-api.azurewebsites.net/api/v1/admin/classroom"
export const get_List_classroom = "https://survey-service-api.azurewebsites.net/api/v1/all/classroom"
//Feedback
export const list_feeback_checked = "https://survey-service-api.azurewebsites.net/api/v1/admin/feedback_checked"
export const list_feeback_unchecked = "https://survey-service-api.azurewebsites.net/api/v1/admin/feedback_unchecked"
export const update_check_feedback = "https://survey-service-api.azurewebsites.net/api/v1/admin/feedback"
export const remove_feedback = "https://survey-service-api.azurewebsites.net/api/v1/admin/feedback"
//FAQs
export const remove_faqs = "https://survey-service-api.azurewebsites.net/api/v1/admin/faqs"
export const create_faqs = "https://survey-service-api.azurewebsites.net/api/v1/admin/faqs"
export const update_faqs = "https://survey-service-api.azurewebsites.net/api/v1/admin/faqs"
export const list_faqs = "https://survey-service-api.azurewebsites.net/api/v1/all/faqs"
// dashboard
export const statistics_system = "https://survey-service-api.azurewebsites.net/api/v1/admin/dashboard"
export const statistics_survey_details = "https://survey-service-api.azurewebsites.net//api/v1/admin/dashboard/surveys"