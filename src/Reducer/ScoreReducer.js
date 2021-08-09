
export default function reducer2(score, action) {
  switch (action.type) {
    case 'ADD': return { count: score.count + 1 };
    case 'RESET': return { count: 0 };
    default: return score;
  }
}