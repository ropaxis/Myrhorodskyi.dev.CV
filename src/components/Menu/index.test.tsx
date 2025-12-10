import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './index';
import { vi } from 'vitest';

// Заглушки для компонентів LanguageSwitcher та Auth
describe('Menu component', () => {
  test('кнопка меню відображається та відкриває список', () => {
    const openListMock = vi.fn();
    const { container } = render(
      <Menu isOpen={false} openList={openListMock} />
    );

    // Кнопка меню
    const menuButton = screen.getByRole('button', { name: /wheel menu/i });
    expect(menuButton).toBeInTheDocument();

    // Клік відкриває список
    fireEvent.click(menuButton);
    expect(openListMock).toHaveBeenCalledWith(true);

    // Список закритий
    const menuList = container.querySelector('.menu__list');
    expect(menuList).toHaveClass('close');
  });

  test('кнопка закриття працює', () => {
    const openListMock = vi.fn();
    const { container } = render(
      <Menu isOpen={true} openList={openListMock} />
    );

    const closeButton = container.querySelector('.menu__button-close') as HTMLButtonElement;
    expect(closeButton).toBeInTheDocument();

    fireEvent.click(closeButton);
    expect(openListMock).toHaveBeenCalledWith(false);

    const menuList = container.querySelector('.menu__list');
    expect(menuList).toHaveClass('open');
  });
});