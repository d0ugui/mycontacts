import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/4f4d1111-69c1-4fe3-bf85-15423807c3d2?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
