
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" alt="WRLDS Technologies Logo" className={cn("h-8 w-auto", isScrolled ? "" : "brightness-0 invert")} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                       Início
                     </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                       Sobre Nós
                     </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                   <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                     Casos de Clientes
                   </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                         <Link to="/projects/firecat" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                           <div className="font-medium">FireCat 6th SENSE</div>
                           <p className="text-sm text-gray-500">Têxteis inteligentes para segurança de bombeiros</p>
                         </Link>
                      </li>
                      <li>
                         <Link to="/projects/sport-retail" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                           <div className="font-medium">Performance Esportiva</div>
                           <p className="text-sm text-gray-500">Rastreamento avançado para atletas</p>
                         </Link>
                      </li>
                      <li>
                         <Link to="/projects/workwear" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                           <div className="font-medium">Controle Climático para Vestuário</div>
                           <p className="text-sm text-gray-500">Regulação de temperatura para ambientes extremos</p>
                         </Link>
                      </li>
                      <li>
                         <Link to="/projects/hockey" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                           <div className="font-medium">Rastreador Elite de Hockey</div>
                           <p className="text-sm text-gray-500">Rastreamento de performance para hockey no gelo</p>
                         </Link>
                      </li>
                      <li>
                         <Link to="/projects/pet-tracker" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                           <div className="font-medium">Contador de Atividade Pet</div>
                           <p className="text-sm text-gray-500">Coleiras inteligentes para monitoramento de pets</p>
                         </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                   <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                     Saiba Mais
                   </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                         <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                           <div className="font-medium">Detalhes da Tecnologia</div>
                           <p className="text-sm text-gray-500">Como nossa plataforma de têxteis inteligentes funciona</p>
                         </Link>
                      </li>
                      <li>
                         <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                           <div className="font-medium">Processo de Desenvolvimento</div>
                           <p className="text-sm text-gray-500">Nossa abordagem para criar soluções personalizadas</p>
                         </Link>
                      </li>
                      <li>
                        
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                       Notícias
                     </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers">
                     <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                       Carreiras
                     </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                   <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-white hover:bg-gray-600")}>
                     Contato
                   </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-white" : "bg-black")}>
           <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
             setIsMenuOpen(false);
             window.scrollTo(0, 0);
           }}>
             Início
           </Link>
          
           <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
             setIsMenuOpen(false);
             window.scrollTo(0, 0);
           }}>
             Sobre Nós
           </Link>
          
          {/* Simplified Customer Cases - no dropdown */}
           <Link to="/projects/firecat" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
             setIsMenuOpen(false);
             window.scrollTo(0, 0);
           }}>
             Casos de Clientes
           </Link>
          
          {/* Simplified Learn More - no dropdown */}
           <Link to="/tech-details" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
             setIsMenuOpen(false);
             window.scrollTo(0, 0);
           }}>
             Saiba Mais
           </Link>
          
           <Link to="/blog" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
             setIsMenuOpen(false);
             window.scrollTo(0, 0);
           }}>
             Notícias
           </Link>
          
           <Link to="/careers" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
             setIsMenuOpen(false);
             window.scrollTo(0, 0);
           }}>
             Carreiras
           </Link>
          
           <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")}>
             Contato
           </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
