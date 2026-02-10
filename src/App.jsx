import { CardPalleteList } from "./assets/components/ColorPalette.jsx";

const initial_colors = [
{ 
        id: 1, 
        likes: 0, 
        date: '19 hours', 
        colors: ['#B33939', '#E0D2C1', '#F7F1E3', '#706FD3'] 
    },
    { 
        id: 2, 
        likes: 0, 
        date: 'Yesterday', 
        colors: ['#30336B', '#EB4D4B', '#F0932B', '#FFBE7B'] 
    },
    { 
        id: 3, 
        likes: 0, 
        date: '2 days', 
        colors: ['#130F40', '#0097E6', '#00A8FF', '#F5E6CA'] 
    },
    { 
        id: 4, 
        likes: 0, 
        date: '3 days', 
        colors: ['#faf093', '#FAD7A0', '#F1948A', '#EC7063'] 
    },
    { 
        id: 5, 
        likes: 0, 
        date: '19 hours', 
        colors: ['#3ed658', '#E0D2C1', '#F7F1E3', '#474592'] 
    },
    { 
        id: 6, 
        likes: 0, 
        date: 'Yesterday', 
        colors: ['#b1b2c5', '#bac468', '#b9c079', '#ee8216'] 
    },
    { 
        id: 7, 
        likes: 0, 
        date: '2 days', 
        colors: ['#4b4a5a', '#5f90aa', '#708e9c', '#88744e'] 
    },
    { 
        id: 8, 
        likes: 0, 
        date: '3 days', 
        colors: ['#2c3e50', '#2980b9', '#3498db', '#95a5a6'] 
    },
    { 
        id: 9, 
        likes: 0, 
        date: '4 days', 
        colors: ['#6D214F', '#833471', '#B83227', '#F8EFBA'] 
    },
    { 
        id: 10, 
        likes: 0, 
        date: '5 days', 
        colors: ['#1B1464', '#0652DD', '#12CBC4', '#FDA7DF'] 
    },
    { 
        id: 11, 
        likes: 0, 
        date: '6 days', 
        colors: ['#58B19F', '#2C3A47', '#D6A2E8', '#CAD3C8'] 
    },
    { 
        id: 12, 
        likes: 0, 
        date: '1 week', 
        colors: ['#182C61', '#4834D4', '#686DE0', '#95AFC0'] 
    }
];

function App() {
    return (
        <div className="App">
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Color Hunt Clone</h1>
            <CardPalleteList data={initial_colors} />
        </div>
    );
}

export default App;