// Assignment 47: Reusable Storage Helper Module (Failsafe)
const StorageHelper = (() => {
    const isAvailable = () => {
        try {
            localStorage.setItem('__test__', '1');
            localStorage.removeItem('__test__');
            return true;
        } catch (e) {
            return false; // Handles incognito mode or quota exceeded
        }
    };

    return {
        save: (key, data) => {
            if (!isAvailable()) return false;
            try {
                localStorage.setItem(key, JSON.stringify(data));
                return true;
            } catch(e) { return false; }
        },
        load: (key, fallback = null) => {
            if (!isAvailable()) return fallback;
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : fallback;
        }
    };
})();

// Assignment 46: Persistent Settings
const AppSettings = {
    init: () => {
        const savedSettings = StorageHelper.load('user_settings', { theme: 'light' });
        console.log("Loaded Settings on Boot:", savedSettings);
    },
    updateTheme: (newTheme) => {
        StorageHelper.save('user_settings', { theme: newTheme });
        console.log("Settings Updated and Saved:", newTheme);
    }
};

AppSettings.init();
// AppSettings.updateTheme('dark'); // Uncomment to test saving
