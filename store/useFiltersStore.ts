import create from 'zustand';

// Define the type for the filters
export type Filters = {
    avgSaleTime: string | null;
    priceRange: {min:number, max:number};
    totalReviews: string | null;
    totalFees: string | null;
    };

    // Define the Zustand store
const useFiltersStore = create((set) => ({
    avgSaleTime: null,
    priceRange: null,
    totalReviews: null,
    totalFees: null,
    // Function to update the filter values
    updateFilter: (filterName: keyof Filters, value: string | null) => {
        set((state:Filters) => ({
        ...state,
        [filterName]: value,
        }));
    },
}));

export default useFiltersStore;