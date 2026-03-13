import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set, get) => ({
      // اللغة والثيم
      lang: 'ar',
      theme: 'light',
      
      // حالة الملف
      file: {
        name: null,
        size: null,
        ext: null,
        headers: [],
        rows: [],
        errors: [],
        currency: 'SAR',
      },
      
      // حالة التحليل
      analysis: {
        ready: false,
        revenue: 0,
        expenses: 0,
        profit: 0,
        runway: 0,
        health: 0,
        margin: 0,
        monthly: [],
      },
      
      // حالة التصنيف
      mapping: {
        items: {},
        progress: 0,
        confirmed: 0,
      },
      
      // السيناريوهات المحفوظة
      scenarios: [],
      
      // Actions
      setLang: (lang) => set({ lang }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      
      setFile: (fileData) => set((state) => ({
        file: { ...state.file, ...fileData }
      })),
      
      setAnalysis: (analysisData) => set((state) => ({
        analysis: { ...state.analysis, ...analysisData, ready: true }
      })),
      
      addScenario: (scenario) => set((state) => ({
        scenarios: [...state.scenarios, scenario]
      })),
      
      reset: () => set({
        file: { name: null, size: null, ext: null, headers: [], rows: [], errors: [], currency: 'SAR' },
        analysis: { ready: false, revenue: 0, expenses: 0, profit: 0, runway: 0, health: 0, margin: 0, monthly: [] },
        mapping: { items: {}, progress: 0, confirmed: 0 },
      }),
    }),
    {
      name: 'nexus-4-pl-storage', // اسم في localStorage
    }
  )
);

export default useAppStore;
