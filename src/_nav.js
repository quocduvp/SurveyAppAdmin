export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW',
            },
        },
        {
            name: 'Manage account',
            url: '/accounts',
            icon: 'icon-people',
            children: [
                {
                    name: 'Accounts allow',
                    url: '/accounts',
                    icon: 'icon-user-following',
                },
                {
                    name: 'Accounts deny',
                    url: '/accounts_deny',
                    icon: 'icon-user-unfollow',
                },
                {
                    name: 'Accounts staff',
                    url: '/accounts_staff',
                    icon: 'icon-briefcase',
                },
                {
                    name: 'Accounts student',
                    url: '/accounts_student',
                    icon: 'icon-graduation',
                },
                {
                    name: 'Forgot password help',
                    url: '/accounts_help',
                    icon: 'icon-flag',
                }
            ]
        },
        {
            name : 'Manage survey',
            url : '/surveys',
            icon : 'icon-folder-alt',
            children : [
                {
                    name: 'Surveys list',
                    url: '/surveys',
                    icon: 'icon-list',
                },
                {
                    name: 'Surveys type text',
                    url: '/surveys_text',
                    icon: 'icon-doc',
                },
                {
                    name: 'Surveys type choice',
                    url: '/surveys_choice',
                    icon: 'icon-check',
                },
                {
                    name: 'Survey list unpublish',
                    url: '/surveys_unpublish',
                    icon: 'icon-lock',
                },
                {
                    name: 'Survey list deleted',
                    url: '/surveys_deleted',
                    icon: 'icon-trash',
                }                
            ]
        },
        {
            name: 'Faculty/Class',
            url: '/education',
            icon: 'icon-directions',
            badge: {

            },
        },
        {
            name: 'Feedbacks',
            url: '/feedbacks',
            icon: 'icon-envelope-letter',
            badge: {

            },
        },
        {
            name: 'FAQs',
            url: '/FAQs',
            icon: 'icon-speech',
            badge: {

            },
        },
        {
            divider: true,
        }
    ],
};
