import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let settingsStore = set => ({
  dark: false,
  toggleDarkMode: () => set(state => ({ dark: !state.dark }))
});

let peopleStore = set => ({
  people: ['James', 'Kobe'],
  addPerson: person => set(state => ({ people: [...state.people, person] }))
});

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: 'user_settings' });

export const useSettingsStore = create(settingsStore);
export const usePeopleStore = create(peopleStore);
