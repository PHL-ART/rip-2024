import { Blog } from "./components/custom/Blog";
import { Books } from "./components/custom/Books";
import { Header } from "./components/custom/Header";
import { MainLayout } from "./components/custom/MainLayout";
import { Movies } from "./components/custom/Movies";
import { Others } from "./components/custom/Others";
import { Projects } from "./components/custom/Projects";
import { ThemeProvider } from "./components/custom/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <Header />
        <Projects />
        <Blog />
        <Movies />
        <Books />
        <Others />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
