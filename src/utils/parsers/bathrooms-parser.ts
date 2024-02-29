export class BathroomsParser {
  private constructor(private Bathrooms: string | string[]) {}

  private onlyString() {
    if (this.Bathrooms === '5') {
      return {
        Bath_tot: {
          $gte: 5,
        },
      };
    }

    return {
      Bath_tot: {
        $eq: this.Bathrooms,
      },
    };
  }

  private onlyArray() {
    if ((this.Bathrooms as string[]).includes('5')) {
      if ((this.Bathrooms as string[]).length === 1) {
        this.Bathrooms = '5';
        return this.onlyString();
      }

      return {
        $or: [
          {
            Bath_tot: {
              $gte: 5,
            },
          },
          {
            Bath_tot: {
              $in: (this.Bathrooms as string[]).filter((b: any) => b !== '5'),
            },
          },
        ],
      };
    }

    return {
      Bath_tot: {
        $in: this.Bathrooms,
      },
    };
  }

  public static create(Bathrooms: string | string[]) {
    return new BathroomsParser(Bathrooms);
  }

  parse() {
    if (Array.isArray(this.Bathrooms)) {
      return this.onlyArray();
    }
    return this.onlyString();
  }
}
