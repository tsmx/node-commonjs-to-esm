export const route1 = (req, res) => {
    res.json({ message: 'Route 1' });
};

export function route2 (req, res) {
    res.json({ message: 'Route 2' });
}