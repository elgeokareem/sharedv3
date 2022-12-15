/* eslint-disable jsdoc/no-types */
import { DriverType, UserType } from './types';

/**
 * Replace multi spaces with single spaces.
 *
 * @example const newString = trimMultiSpaces(text);
 * @param {string} text - The text to replace.
 * @returns The new string.
 */
export const trimMultiSpaces = (text: string) => {
  if (!text) return '';
  return text.replace(/  +/g, ' ');
};

/**
 * Sort Drivers.
 *
 * This function sort the drivers using the count number and the first name
 * to order the drivers alphabetically when count have the same value.
 *
 * @example topRecoveryAgnes.sort(sortDrivers)
 * @param {object} x - Driver x.
 * @param {object} y - Driver y.
 * @returns Number.
 */
export const sortDrivers = (x: DriverType, y: DriverType) => {
  const countY = y.count;
  const countX = x.count;

  if (
    countY === countX &&
    x.firstName &&
    y.firstName &&
    x.firstName !== '' &&
    y.firstName !== ''
  ) {
    return x.firstName.charCodeAt(0) - y.firstName.charCodeAt(0);
  }

  return countY - countX;
};

/**
 * To filter user by fullName for dropdown/select.
 *
 * @example users.filter((user) => filterUser(`${user.firstName} ${user.lastName}`, search));
 * @param {string} fullName - The user to filter.
 * @param {string} search - To filter the users.
 * @returns If the user is valid on filter.
 */
export const filterUserByFullName = (fullName: string, search: string) => {
  if (!search) return true;

  const searchLowercase = trimMultiSpaces(search).toLowerCase();
  const fullNameLowercase = trimMultiSpaces(fullName).toLowerCase();

  if (fullNameLowercase.includes(searchLowercase)) return true;

  return false;
};

/**
 * To filter user by firstName/lastName/fullName for dropdown/select.
 *
 * @example users.filter((user) => filterUser(user, search));
 * @param {object} user - The user to filter.
 * @param {string} search - To filter the users.
 * @returns If the user is valid on filter.
 */
export const filterUser = (user: UserType, search: string) => {
  if (!search) return true;

  const { firstName, lastName } = user;
  const fullName = `${firstName} ${lastName}`;

  return filterUserByFullName(fullName, search);
};
