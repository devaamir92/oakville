export class BedroomsParser {
  private constructor(private bedrooms: string | string[]) {}

  private onlyString() {
    if (this.bedrooms === '5') {
      return {
        Br: {
          $gte: 5,
        },
      };
    }

    return {
      Br: {
        $eq: this.bedrooms,
      },
    };
  }

  private onlyArray() {
    if ((this.bedrooms as string[]).includes('5')) {
      if ((this.bedrooms as string[]).length === 1) {
        this.bedrooms = '5';
        return this.onlyString();
      }

      return {
        $or: [
          {
            Br: {
              $gte: 5,
            },
          },
          {
            Br: {
              $in: (this.bedrooms as string[]).filter((b: any) => b !== '5'),
            },
          },
        ],
      };
    }

    return {
      Br: {
        $in: this.bedrooms,
      },
    };
  }

  public static create(bedrooms: string | string[]) {
    return new BedroomsParser(bedrooms);
  }

  parse() {
    if (Array.isArray(this.bedrooms)) {
      return this.onlyArray();
    }
    return this.onlyString();
  }
}
