import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavBar from "../NavBar"
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test('renders link to the user profile or a logged in user', async () => {
    render(
    <Router><CurrentUserProvider>
        <NavBar />
        </CurrentUserProvider>
    </Router>
    );

    const profileAvatar = await screen.findByText('Profile')
    expect(profileAvatar).toBeInTheDocument()
});

test('renders Sign in and Sign up buttons again on log out', async () => {
    render(
    <Router><CurrentUserProvider>
        <NavBar />
        </CurrentUserProvider>
    </Router>
    );

    const signOutLink = await screen.findByRole('link', {name: 'Sign out'});
    fireEvent.click(signOutLink)

    const signInLink = await screen.findByRole('link', {name: "Sign in"});
    const signUpLink = await screen.findByRole('link', {name: "Sign up"});

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();

});