import { render, screen, fireEvent } from '@testing-library/react';
import FromCoding from '../FormCoding';

describe('FromCoding', () => {
  //TEST SEMUA COMPONENT YANG ADA PADA FROMCODING
  test('Renders FromCoding Component', () => {
    render(<FromCoding />);
    expect(
      screen.getByText('Pendaftaran Peserta Coding Bootcamp')
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan/)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Foto Surat Kesungguhan/)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)
    ).toBeInTheDocument();
  });

  // TEST MEMASUKAN INPUT UNTUK NAMA LENGKAP, EMAIL DAN HARAPAN
  test('Input Text For Nama Lengkap, Email And Harapan', () => {
    render(<FromCoding />);

    fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {
      target: { value: 'Yusuf Maolana' },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'yusufmaolana001@ummi.ac.id' },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /harapan/i }), {
      target: { value: 'Semoga Bootcamp Ini Lancar' },
    });
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue('Yusuf Maolana');
    expect(screen.getByLabelText(/Email/)).toHaveValue(
      'yusufmaolana001@ummi.ac.id'
    );
    expect(
      screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)
    ).toHaveValue('Semoga Bootcamp Ini Lancar');
  });

  // TEST NAMA LENGKAP DENGAN ATURAN YANG SALAH
  test('Input Text For Nama Lengkap With Number', () => {
    render(<FromCoding />);
    fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {
      target: { value: 'Yusuf Maolana004' },
    });
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue(
      'Yusuf Maolana004'
    );
    expect(
      screen.getByText('Nama Lengkap Harus Berupa Huruf')
    ).toBeInTheDocument();
  });

  //TEST EMAIL DENGAN ATURAN YANG SALAH
  test('Input Text For Email With Incorrect Rules', () => {
    render(<FromCoding />);
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'yusuf990gmail' },
    });
    expect(screen.getByLabelText(/Email/)).toHaveValue('yusuf990gmail');
    expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
  });
});
