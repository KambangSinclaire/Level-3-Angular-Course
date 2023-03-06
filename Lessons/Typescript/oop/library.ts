export class Library {
    // Properties == Attributes
    name: string;
    description: string;
    author: string;
    coauthors?: string[];

    // To access the properties of a class, we use the 'this' keyword

    // Methods

    // Define a class method that returns the author
    getAuthor() {
        return this.author;
    }

    getCoAuthors(): string[] | undefined {
        return this.coauthors;
    }

    // To specify  the return type of a function in TYPESCRIPT, we do as follows
    getName(): string {
        return this.name;
    }

    setCoauthors(coauthor: string): void {
        this.coauthors?.push(coauthor);
    }
}