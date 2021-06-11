import { faAnalytics } from '@fortawesome/pro-light-svg-icons';
import { faMedkit } from '@fortawesome/pro-light-svg-icons';
import { faCog } from '@fortawesome/pro-light-svg-icons';
import { faAtom } from '@fortawesome/pro-light-svg-icons';
import { faBalanceScale } from '@fortawesome/pro-light-svg-icons';
import { faPalette } from '@fortawesome/pro-light-svg-icons';
import { faSoup } from '@fortawesome/pro-light-svg-icons';
import { faAtlas } from '@fortawesome/pro-light-svg-icons';

export const disciplines = [
    {
        icon: faAnalytics,
        label: 'business-management-and-economics',
        value: 'BUSINESS_MANAGEMENT_AND_ECONOMICS'
    },
    {
        icon: faCog,
        label: 'engineering-and-technology',
        value: 'ENGINEERING_AND_TECHNOLOGY'
    },
    {
        icon: faAtom,
        label: 'sciences',
        value: 'SCIENCES'
    },
    {
        icon: faSoup,
        label: 'culinary-arts',
        value: 'CULINARY_ARTS'
    },
    {
        icon: faBalanceScale,
        label: 'law-politics-social-community-service-and-teaching',
        value: 'LAW_POLITICS_SOCIAL_COMMUNITY_SERVICE_AND_TEACHING'
    },
    {
        icon: faPalette,
        label: 'arts',
        value: 'ARTS'
    },
    {
        icon: faMedkit,
        label: 'health-sciences-medicine-nursing-paramedic-and-kinesiology',
        value: 'HEALTH_SCIENCES_MEDICINE_NURSING_PARAMEDIC_AND_KINESIOLOGY'
    },
    {
        icon: faAtlas,
        label: 'english-for-academic-studies',
        value: 'ENGLISH_FOR_ACADEMIC_STUDIES'
    }
];

export const getDisciplineLabel = (value: string | undefined): string =>
    disciplines.find((discipline) => discipline.value === value)?.label || '';
