//Classes, fetchAPI, promise and arrow function
/**
 * EasyHttp Library
 * Library for making HTTP Requests using fetchAPI
 * 
 * @version 3.0.0
 * @author Harman Kumar
 * @license MIT
 */

class EasyHttp {
  //Make get request for top 10 users
  async getUsers(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }

  //Create User
  async createUser(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const jsonData = await response.json();
    return jsonData;
  }

  //Update user
  async updateUser(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const jsonData = await response.json();
    return jsonData;
  }

  //Delete User
  async deleteUser(url) {

    const response = await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' }
    });

    const jsonData = await 'User deleted';
    return jsonData;
  }
}