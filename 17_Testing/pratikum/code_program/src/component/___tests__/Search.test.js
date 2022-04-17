import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../Search';

jest.mock('axios');

describe('Search', () => {
  test('Fetches Stories From An API and Displays Them', async () => {
    const stories = [
      { objectID: '1', title: 'hello' },
      { objectID: '2', title: 'React' },
    ];
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });
    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
  });

  test('Fetches Stories From An API and Fails', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    });
    const items = await screen.findByText('Ada yang error ...');

    expect(items).toBeInTheDocument();
  });
});
