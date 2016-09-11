using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProblemUtils
{
    using MoveSequence = List<Tuple<int, string>>;
    public class ProblemTree
    {
        public int Size { get; set; }
        public Dictionary<int, MoveSequence> Variations;

        public struct ZoomType
        {
            public int Top;
            public int Left;
            public int Bottom;
            public int Right;
        }

        public ZoomType Zoom;

        private ProblemTree()
        {
        }

        private void Initialize()
        {
            Variations = new Dictionary<int, MoveSequence>();
            Zoom.Top = 0;
            Zoom.Left = 0;
            Zoom.Right = this.Size;
            Zoom.Bottom = this.Size;
        }

        public ProblemTree(int size)
        {
            Size = size;
            Initialize();
        }

        public void SetInitialShape(MoveSequence initialShape)
        {
            Variations[0] = new MoveSequence(initialShape);
        }

        public MoveSequence GetInitialShape()
        {
            return Variations[0];
        }

        public void AddVariation(int ID, MoveSequence variation)
        {
            Variations[ID] = new MoveSequence(variation);
        }

        public MoveSequence GetVariation(int ID)
        {
            return Variations[ID];
        }

    }
}
