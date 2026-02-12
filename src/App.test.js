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
    
    // Find inputs
    const titleInput = screen.getByPlaceholderText(/Title/i);
    const descInput = screen.getByPlaceholderText(/Description/i);
    const addButton = screen.getByRole('button', { name: /Add/i });

    // Simulate user typing
    fireEvent.change(titleInput, { target: { value: 'My New Lab' } });
    fireEvent.change(descInput, { target: { value: 'Testing with Vitest' } });
    fireEvent.click(addButton);

    // Verify the new project appears in the list
    expect(screen.getByText('My New Lab')).toBeInTheDocument();
    expect(screen.getByText('Testing with Vitest')).toBeInTheDocument();
  });

  it('filters projects based on search input', () => {
    render(<App />);
    
    // The search bar should be present
    const searchInput = screen.getByPlaceholderText(/Search Projects/i);
    
    // Type something that doesn't exist
    fireEvent.change(searchInput, { target: { value: 'NonExistentProject' } });
    
    // Verify "No projects found" message appears
    expect(screen.getByText(/No projects found/i)).toBeInTheDocument();
  });
});