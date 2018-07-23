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
            name: 'Faculty/classroom',
            url: '/education',
            icon: 'fa fa-building',
            badge: {

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
                    icon: 'fa fa-file-text-o',
                },
                {
                    name: 'Surveys type choice',
                    url: '/surveys_choice',
                    icon: 'fa fa-check-circle-o',
                },
                {
                    name: 'Survey list unpublish',
                    url: '/surveys_unpublish',
                    icon: 'fa fa-unlock',
                },
                {
                    name: 'Survey list deleted',
                    url: '/surveys_deleted',
                    icon: 'icon-trash',
                }                
            ]
        },
        {
            name: 'Feedbacks',
            url: '/feedbacks',
            icon: 'fa fa-feedback',
            badge: {

            },
        },
        {
            name: 'FAQs',
            url: '/FAQs',
            icon: 'fa fa-feedback',
            badge: {

            },
        },
        {
            divider: true,
        }
    ],
};
