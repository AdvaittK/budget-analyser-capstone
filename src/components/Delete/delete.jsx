import React from 'react';

const BudgetAnalyser = () => {
  const clearCache = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload(); // Reload the page to reflect changes
  };

  const clearIndexedDB = async () => {
    if (window.indexedDB) {
      const databases = await window.indexedDB.databases();
      databases.forEach((db) => window.indexedDB.deleteDatabase(db.name));
      console.log("IndexedDB cleared");
    }
  };

  return (
    <div className="budget-analyser">
      <button
        onClick={() => {
          clearCache();
          clearIndexedDB();
        }}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Delete All Data
      </button>
    </div>
  );
};

export default BudgetAnalyser;
