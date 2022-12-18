import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupGetAll } from './groupGetAll';

import { GROUP_COLLECTION } from '../storageConfig';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupGetAll();

    const storage = JSON.stringify([...storedGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}