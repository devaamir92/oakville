export class BathroomsParser {
  private constructor(private Bathrooms: string | string[]) {}

  private onlyString() {
    if (this.Bathrooms === '4') {
      return {
        Bath_tot: {
          $gte: 4,
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
    if ((this.Bathrooms as string[]).includes('4')) {
      if ((this.Bathrooms as string[]).length === 1) {
        this.Bathrooms = '4';
        return this.onlyString();
      }

      return {
        $or: [
          {
            Bath_tot: {
              $gte: 4,
            },
          },
          {
            Bath_tot: {
              $in: (this.Bathrooms as string[]).filter((b: any) => b !== '4'),
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
