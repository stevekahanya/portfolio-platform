import React from 'react'; // Ensure this is here
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import App from './App';
import '@testing-library/jest-dom'; 

describe('Portfolio Platform Core Functionality', () => {
  
  it('renders the main application heading', () => {
    render(<App />);
    const heading = screen.getByText(/Personal Project Showcase App/i);
    expect(heading).toBeInTheDocument();
  });

  it('allows a user to add a new project', () => {
    render(<App />);
    
    // Using placeholder text to find inputs
    const titleInput = screen.getByPlaceholderText(/Title/i);
    const descInput = screen.getByPlaceholderText(/Description/i);
    const addButton = screen.getByRole('button', { name: /Add/i });

    fireEvent.change(titleInput, { target: { value: 'My New Lab' } });
    fireEvent.change(descInput, { target: { value: 'Testing with Vitest' } });
    fireEvent.click(addButton);

    expect(screen.getByText('My New Lab')).toBeInTheDocument();
  });

  it('filters projects based on search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search Projects/i);
    
    fireEvent.change(searchInput, { target: { value: 'NonExistentProject' } });
    
    expect(screen.getByText(/No projects found/i)).toBeInTheDocument();
  });
});