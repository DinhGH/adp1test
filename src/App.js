import React, { useState } from 'react';

function App() {
  const [operation, setOperation] = useState('');
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  // Hàm kiểm tra số nguyên tố
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCalculate = (type) => {
    if (!input.trim()) {
      setResult('Vui lòng nhập dãy số hợp lệ');
      return;
    }

    // Tách mảng số từ chuỗi input, chuyển sang số, lọc các giá trị không hợp lệ
    const numbers = input
      .trim()
      .split(/\s+/)
      .map((x) => parseFloat(x))
      .filter((x) => !isNaN(x));

    if (numbers.length === 0) {
      setResult('Vui lòng nhập dãy số hợp lệ');
      return;
    }

    switch (type) {
      case 'max':
        setResult(`Số lớn nhất là: ${Math.max(...numbers)}`);
        break;
      case 'min':
        setResult(`Số nhỏ nhất là: ${Math.min(...numbers)}`);
        break;
      case 'sum':
        // const sum = numbers.reduce((acc, cur) => acc + cur, 0);
        // setResult(`Tổng các số là: ${sum}`);
        break;
      case 'prime':
        // const primes = numbers.filter(isPrime);
        // setResult(
        //   primes.length > 0
        //     ? `Các số nguyên tố là: ${primes.join(', ')}`
        //     : 'Không có số nguyên tố nào trong dãy'
        // );
        break;
      default:
        setResult(null);
    }
  };

  const renderForm = () => (
    <div style={styles.form}>
      <input
        type="text"
        placeholder="Nhập các số cách nhau bởi dấu cách"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={() => handleCalculate(operation)} style={styles.calculateButton}>
        Thực hiện
      </button>
      {result !== null && <p style={styles.result}>{result}</p>}
    </div>
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🧮 Xử lý mảng số</h2>
      <div style={styles.menu}>
        <button onClick={() => { setOperation('max'); setResult(null); }} style={styles.menuButton}>
          Tìm số lớn nhất
        </button>
        <button onClick={() => { setOperation('min'); setResult(null); }} style={styles.menuButton}>
          Tìm số nhỏ nhất
        </button>
        <button onClick={() => { setOperation('sum'); setResult(null); }} style={styles.menuButton}>
          Tính tổng
        </button>
        <button onClick={() => { setOperation('prime'); setResult(null); }} style={styles.menuButton}>
          In số nguyên tố
        </button>
      </div>

      {operation && (
        <div style={styles.formContainer}>
          <h3 style={styles.subtitle}>
            {operation === 'max' && 'Tìm số lớn nhất'}
            {operation === 'min' && 'Tìm số nhỏ nhất'}
            {operation === 'sum' && 'Tính tổng các số'}
            {operation === 'prime' && 'In ra các số nguyên tố'}
          </h3>
          {renderForm()}
        </div>
      )}
    </div>
  );
}

// CSS dùng lại, có thể tùy chỉnh thêm nếu cần
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    maxWidth: '500px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginTop: '50px'
  },
  title: {
    textAlign: 'center',
    color: '#333'
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px'
  },
  menuButton: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  },
  formContainer: {
    textAlign: 'center'
  },
  subtitle: {
    color: '#555'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center'
  },
  input: {
    padding: '8px',
    width: '80%',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  calculateButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  result: {
    marginTop: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#e74c3c'
  }
};

export default App;
