  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  body {
    background: #0e101c;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  .container {
    background: #1a1d2b;
    padding: 30px 25px;
    border-radius: 12px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
    transition: all 0.3s ease;
  }

  .form-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 26px;
    color: #00d4ff;
  }

  .input-group {
    position: relative;
    margin-bottom: 20px;
  }

  .input-group i {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    color: #aaa;
  }

  .input-group input {
    width: 100%;
    padding: 12px 12px 12px 36px;
    background: #262b3e;
    border: 1px solid #3a3f55;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: border 0.3s;
  }

  .input-group input:focus {
    border-color: #00d4ff;
  }

  .input-group label {
    position: absolute;
    top: -10px;
    left: 36px;
    background: #1a1d2b;
    padding: 0 5px;
    font-size: 12px;
    color: #00d4ff;
  }

  .btn {
    width: 100%;
    padding: 12px;
    background: #00d4ff;
    border: none;
    border-radius: 6px;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .btn:hover {
    background: #00b8e6;
  }

  .or {
    text-align: center;
    margin: 15px 0;
    color: #aaa;
    font-size: 14px;
  }

  .links {
    text-align: center;
    margin-top: 15px;
  }

  .links p {
    color: #aaa;
    margin-bottom: 5px;
  }

  .links button {
    background: transparent;
    border: none;
    color: #00d4ff;
    cursor: pointer;
    font-size: 14px;
    text-decoration: underline;
  }

  .recover {
    text-align: right;
    font-size: 13px;
    margin-bottom: 10px;
  }

  .recover a {
    color: #00d4ff;
    text-decoration: none;
  }

  .recover a:hover {
    text-decoration: underline;
  }

  .messageDiv {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 6px;
    background-color: #222;
    color: #fff;
    font-size: 14px;
  }
