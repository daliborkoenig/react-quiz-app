
export default function reducer(qNum, action) {
  switch (action.type) {
    case 'ADD': return { count: qNum.count + 1 };
    case 'RESET': return { count: 0 };
    default: return qNum;
  }
}


