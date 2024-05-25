import { MANAGER_PROFILES, PROFILE } from '@/Constants/profiles';
import { usePage } from '@inertiajs/react';
import { t } from 'i18next';

export const getCurrentUser = () => {
  return usePage().props?.auth?.currentUser;
};

export const getProfileLabel = (profileId) => {
  switch (profileId) {
    case PROFILE.LESSOR:
      return t('profile.lessor');
    case PROFILE.TRAVELER:
      return t('profile.traveler');
    case PROFILE.PROVIDER:
      return t('profile.provider');
    case PROFILE.MANAGEMENT:
      return t('profile.management');
    case PROFILE.ADMIN:
      return t('profile.admin');
    default:
      return 'Autre';
  }
};

export const isUserAdmin = (user) => {
  return user?.profiles?.some((profile) => profile.id == PROFILE.ADMIN);
};

export const isUserManager = (user) => {
  return user?.profiles?.some((profile) =>
    MANAGER_PROFILES.includes(profile.id)
  );
};
