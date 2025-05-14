import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, Users, Award, Gamepad2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-primary-50">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md border border-primary-200"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X size={24} className="text-primary-700" /> : <Menu size={24} className="text-primary-700" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 
        w-72 bg-white shadow-lg border-r border-primary-200 lg:static lg:min-h-screen`}
      >
        <div className="p-6">
          <div className="historical-border mb-8">
            <h1 className="text-3xl font-playfair font-bold text-primary-800 mb-2 text-center">
              Noli Mi Tangere
            </h1>
            <div className="historical-divider">
              <span>Chapters 55-64</span>
            </div>
          </div>
          
          <nav className="space-y-2">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <BookOpen size={20} className="text-primary-600" />
              <span>Home</span>
            </NavLink>
            
            <NavLink 
              to="/characters" 
              className={({isActive}) => 
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Users size={20} className="text-primary-600" />
              <span>Characters</span>
            </NavLink>

            <NavLink 
              to="/play" 
              className={({isActive}) => 
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Gamepad2 size={20} className="text-primary-600" />
              <span>Play</span>
            </NavLink>
            
            <NavLink 
              to="/credits" 
              className={({isActive}) => 
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Award size={20} className="text-primary-600" />
              <span>Credits</span>
            </NavLink>
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-4 text-center border-t border-primary-200 bg-primary-50">
          <p className="text-sm text-primary-600 font-playfair">
            © 2025 Noli Me Tangere Group 5 Project
          </p>
        </div>
      </div>

      {/* Overlay to close sidebar on mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-auto h-screen lg:ml-0">
        <div className="container mx-auto p-4 pt-16 lg:pt-8 pb-16">
          <div className="historical-border">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;