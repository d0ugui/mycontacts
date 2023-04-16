import { Routes as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewContact } from './pages/NewContact';
import { Container as EditContact } from './pages/EditContact';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Router>
  );
}
