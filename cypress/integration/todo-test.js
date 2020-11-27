/// <reference types="Cypress" />

const URL_DEV = "http://localhost:3000/";
const URL_PRD = "https://react-todo-eta-one.vercel.app/";

context("cypress-pruebas", () => {
    before(() => {
        cy.visit(URL_PRD);
    });

    describe("Entrar a la aplicacion To-Do", () => {
        it("Crear una nueva tarea y agregarla", () => {
            cy.get("input").type("Pasear al perro");
            cy.get('[type="submit"]').click();
        });
        it("No te permita agregar una tarea vacia", () => {
            cy.get('[type="submit"]').click();
        });
        it("Crear una varias tareas y agregarla", () => {
            cy.get("input").type("Limpiar la casa");
            cy.get('[type="submit"]').click();
            cy.get("input").type("Cocinar");
            cy.get('[type="submit"]').click();
            cy.get("input").type("Salir a correr");
            cy.get('[type="submit"]').click();
            cy.get("input").type("Darle de comer al gato");
            cy.get('[type="submit"]').click();
        });
        it("Poner una tarea como completa", () => {
            cy.get("button").eq(1).click();
            cy.get("button").eq(3).click();
        });
        it("Eliminar una tarea", () => {
            cy.get("button").eq(6).click();
        });
        it("Mostrar tareas completas", () => {
            cy.get("select").select("Completed");
        });
        it("Mostrar tareas incompletas", () => {
            cy.get("select").select("Uncompleted");
        });
        it("Mostrar todas las tareas", () => {
            cy.get("select").select("All");
        });
    });
});
